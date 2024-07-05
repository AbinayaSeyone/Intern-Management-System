package com.threeaxislabs.ims.service.core;

import com.fasterxml.jackson.databind.JsonNode;
import com.flipkart.zjsonpatch.CompatibilityFlags;
import com.flipkart.zjsonpatch.JsonPatch;
import com.threeaxislabs.ims.domain.InternPoolOpening;
import com.threeaxislabs.infinistack.persistence.Entity;
import com.threeaxislabs.infinistack.persistence.EntityPatch;
import com.threeaxislabs.infinistack.persistence.EntityQuery;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.persistence.store.ObjectMappers;
import com.threeaxislabs.infinistack.service.Context;
import com.threeaxislabs.infinistack.service.ServiceException;
import com.threeaxislabs.infinistack.service.StatusCode;
import org.jooq.lambda.Seq;
import com.threeaxislabs.infinistack.util.IdGenerator;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.EnumSet;
import java.util.List;
import java.util.Optional;

import static com.threeaxislabs.infinistack.service.StatusCodes.SC_NOT_FOUND;

public class EntityService<P extends Entity, Q extends EntityQuery> {
@Autowired
    private EmailOTPVerificationService emailOTPVerificationService;

@Autowired
    private EmailService emailService;
    private static final EnumSet<CompatibilityFlags> PATCH_FLAGS = EnumSet.of(
            CompatibilityFlags.MISSING_VALUES_AS_NULLS,
            CompatibilityFlags.REMOVE_NONE_EXISTING_ARRAY_ELEMENT
    );

    protected final Store<P, Q> store;
    protected final IdGenerator idGenerator;


    public EntityService(Store<P, Q> store, IdGenerator idGenerator) {
        this.store = store;
        this.idGenerator = idGenerator;
    }


    public Class<P> type() {
        return store.type();
    }

    public List<P> query(Context ctx, Q query) {
        return Seq.seq(store.query(ctx.session(), query)).toList();
    }

    public Optional<P> queryOne(Context ctx, String id) {
        return store.queryOne(ctx.session(), id);
    }


    public P create(Context ctx, P value) {
        if (value.getId() == null) {
            value.setId(idGenerator.generateId());
        }
        return store.create(ctx.session(), value);

    }


    public P update(Context ctx, P value) {
        Optional<P> valueFound = store.queryOne(ctx.session(), value.getId());
        if (valueFound.isPresent()) {
            return store.update(ctx.session(), value);
        } else {
            throw new ServiceException(new StatusCode(SC_NOT_FOUND.code(), store.type().getSimpleName() + " for id [" + value.getId() + "] does not exist!"));
        }
    }


    public P patch(Context ctx, String id, List<EntityPatch> patches) {
        Optional<P> valueFound = store.queryOne(ctx.session(), id);
        if (valueFound.isPresent()) {
            JsonNode sourceNode = ObjectMappers.writeObjectToNode(valueFound.get());
            JsonNode patchNode = ObjectMappers.writeObjectToNode(patches);

            JsonPatch.applyInPlace(patchNode, sourceNode, PATCH_FLAGS);

            P output = ObjectMappers.readFromNode(sourceNode, store.type());

            String x=null;

            if ((sourceNode.get("publisherMail") != null) &&(sourceNode.get("otp").asText().equals("false"))){
                x = emailOTPVerificationService.EmailOTPVerificationService(String.valueOf(sourceNode.get("publisherMail")));
                ((InternPoolOpening) output).setGeneratedOtp(x);
                System.out.println(x);
            }

            System.out.println("after patched publisher mail "+x);
            System.out.println(!(sourceNode.get("otp").asText().equals("false")));
            System.out.println(sourceNode.get("generatedOtp").asText());
                if (!(sourceNode.get("otp").asText().equals("false")) && sourceNode.get("otp").asText().equals(sourceNode.get("generatedOtp").asText())){
                    ((InternPoolOpening) output).setOtpVerify(true);
                }
                else if(sourceNode.get("otp").asText().equals("false")){
                    System.out.println("otp still didn't receive");
                }else{
                    ((InternPoolOpening) output).setOtpVerify(false);
                }


            if(sourceNode.get("unimail") != null ){
                if (sourceNode.get("verification").asBoolean() == true)
                { emailService.sendEmail(String.valueOf(sourceNode.get("unimail")),"Email Verification for Internship Application","Dear" +sourceNode.get("name")+"Your  Verification is successFul ");
                }
                else{
                    if (sourceNode.get("status1").asBoolean() == false)
                    { emailService.sendEmail(String.valueOf(sourceNode.get("unimail")),"Email Verification for Internship Application","Dear" +sourceNode.get("name")+"Your  Application  Is Suspended Because Of "+sourceNode.get("reasonSuspend"));
                    }

                }
//               emailService.sendEmail(String.valueOf(sourceNode.get("unimail")),"Email Verification for Internship Application","Dear" +sourceNode.get("name")+"Your  Verification is successFul ");
            }
//            && sourceNode.get("verification").toString() =="true"
            if(sourceNode.get("email")!=null ){
                if (sourceNode.get("verification").asBoolean() == true)
                { emailService.sendEmail(String.valueOf(sourceNode.get("email")),"Email Verification for Company application","Dear" +sourceNode.get("name")+"Your  Verification is successFul ");
                }
                else{
                    if (sourceNode.get("status1").asBoolean() == false)
                    { emailService.sendEmail(String.valueOf(sourceNode.get("email")),"Email Verification for Company Application","Dear" +sourceNode.get("name")+"Your  Application  Is Suspended Because Of "+sourceNode.get("suspendReason"));
                    }

                }
}



            return store.update(ctx.session(), output);
        } else {
            throw new ServiceException(new StatusCode(SC_NOT_FOUND.code(), store.type().getSimpleName() + " for id [" + id + "] does not exist!"));
        }




    }

    public Optional<P> delete(Context ctx, P value) {
        Optional<P> valueFound = store.queryOne(ctx.session(), value.getId());
        if (valueFound.isPresent()) {
            return store.deleteOne(ctx.session(), value.getId());
        } else {
            throw new ServiceException(new StatusCode(SC_NOT_FOUND.code(), store.type().getSimpleName() + " for id [" + value.getId() + "] does not exist!"));
        }
    }
}