package com.threeaxislabs.ims.service.gql.schema.resolver;

import com.threeaxislabs.ims.domain.entity.Company;
import com.threeaxislabs.ims.domain.query.CompanyQuery;
import com.threeaxislabs.ims.domain.entity.Referable;
import com.threeaxislabs.ims.service.core.*;
import com.threeaxislabs.ims.domain.*;
import com.threeaxislabs.infinistack.graphql.annotation.GraphQLContext;
import com.threeaxislabs.infinistack.graphql.annotation.GraphQLEnvironment;
import com.threeaxislabs.infinistack.graphql.annotation.GraphQLQuery;
import com.threeaxislabs.infinistack.graphql.annotation.GraphQLRootContext;
import com.threeaxislabs.infinistack.graphql.execution.ResolutionEnvironment;
import com.threeaxislabs.infinistack.service.Context;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;
import com.threeaxislabs.infinistack.util.CollectionUtils;
import graphql.language.InlineFragment;
import org.jooq.lambda.Seq;
import org.springframework.stereotype.Service;

import java.util.*;
import com.threeaxislabs.infinistack.persistence.parameter.type.StringParameter;
import static java.util.Collections.singletonList;



@Service
public class ExternalRefResolver implements GraphQLResolver {
    private final AdminService adminService;
    private final CompanyService companyService;
    private final HiringManagerService hiringManagerService;
    private final HiringProcessService hiringProcessService;
    private final InternPoolOpeningService internPoolOpeningService;
    private final PublisherService publisherService;
    private final InternService internService;
    private final VacancyService vacancyService;
    private final ApplicantService applicantService;

    public ExternalRefResolver(AdminService adminService,
                               CompanyService companyService,
                               HiringManagerService hiringManagerService,
                               HiringProcessService hiringProcessService,
                               InternPoolOpeningService internPoolOpeningService,
                               PublisherService publisherService,
                               InternService internService,
                               VacancyService vacancyService,
                               ApplicantService applicantService ){
        this.adminService=adminService;
        this.companyService=companyService;
        this.publisherService=publisherService;
        this.hiringManagerService=hiringManagerService;
        this.hiringProcessService=hiringProcessService;
        this.internPoolOpeningService=internPoolOpeningService;
        this.internService=internService;
        this.vacancyService=vacancyService;
        this.applicantService=applicantService;
    }

    @GraphQLQuery
    public List<Referable> __externalRef(@GraphQLRootContext Context ctx,
                                         @GraphQLContext Referable entity,
                                         @GraphQLEnvironment ResolutionEnvironment env) {

        Set<String> selectedTypes = Seq.seq(
                        Seq.seq(env.fields)
                                .findFirst(f -> f.getName().equals("__externalRef"))
                                .get().getSelectionSet().getSelections()
                ).filter(selection -> selection instanceof InlineFragment)
                .map(selection -> ((InlineFragment) selection).getTypeCondition().getName()).toSet();

        Map<String, Referable> cache = new HashMap<>();
        List<Referable> referableList = new ArrayList<>();

        if (entity instanceof Admin) {
            fillAdminRefs(ctx, cache, selectedTypes, (Admin) entity, referableList);
        } else if (entity instanceof Company) {
            fillCompanyrRefs(ctx, cache, selectedTypes, (Company) entity, referableList);
        } else if (entity instanceof HiringManager) {
            fillHiringManagerRef(ctx, cache, selectedTypes, (HiringManager) entity, referableList);
        } else if (entity instanceof HiringProcess) {
            fillHiringProcessRefs(ctx, cache, selectedTypes, (HiringProcess) entity, referableList);
        }else if (entity instanceof Intern) {
            fillInternRefs(ctx, cache, selectedTypes, (Intern) entity, referableList);
        }else if (entity instanceof InternPoolOpening) {
            fillInternPoolOpeningRefs(ctx, cache, selectedTypes, (InternPoolOpening) entity, referableList);
        }else if (entity instanceof Publisher) {
            fillPublisherRefs(ctx, cache, selectedTypes, (Publisher) entity, referableList);
        }else if (entity instanceof Vacancy) {
            fillVacancyRefs(ctx, cache, selectedTypes, (Vacancy) entity, referableList);
        } else if(entity instanceof Applicant){
            fillApplicantRefs(ctx,cache,selectedTypes,(Applicant) entity, referableList);
        }
        else {
            referableList.addAll(CollectionUtils.emptyList());
        }

        return referableList;
    }

    private void fillAdminRefs(Context ctx, Map<String, Referable> cache, Set<String> selectedTypes, Admin entity, List<Referable> referableList) {

    }

    private void fillCompanyrRefs(Context ctx, Map<String, Referable> cache, Set<String> selectedTypes, Company entity, List<Referable> referableList) {
        if (selectedTypes.contains(Vacancy.class.getSimpleName())) {
            VacancyQuery vacancyQuery = new VacancyQuery();
            vacancyQuery.setId(singletonList(new StringParameter(entity.getVacancies())));
            List<Vacancy> vacancies = vacancyService.query(ctx, vacancyQuery);
            referableList.addAll(vacancies);
        }
    }

    private void fillHiringManagerRef(Context ctx, Map<String, Referable> cache, Set<String> selectedTypes, HiringManager entity, List<Referable> referableList) {

    }

    private void fillHiringProcessRefs(Context ctx, Map<String, Referable> cache, Set<String> selectedTypes, HiringProcess entity, List<Referable> referableList) {

    }
    private void fillInternRefs(Context ctx, Map<String, Referable> cache, Set<String> selectedTypes,  Intern entity, List<Referable> referableList) {
        if (selectedTypes.contains(InternPoolOpening.class.getSimpleName())) {
            InternPoolOpeningQuery internPoolOpeningQuery = new InternPoolOpeningQuery();
            internPoolOpeningQuery.setId(singletonList(new StringParameter(entity.getInternPoolName())));
            List<InternPoolOpening> internPoolOpenings = internPoolOpeningService.query(ctx, internPoolOpeningQuery);
            referableList.addAll(internPoolOpenings);
        }
        if (selectedTypes.contains(Applicant.class.getSimpleName())) {
            ApplicantQuery applicantQuery= new ApplicantQuery();
            applicantQuery.setId(singletonList(new StringParameter(entity.getId())));
            List<Applicant> applicants = applicantService.query(ctx, applicantQuery);
            referableList.addAll(applicants);
        }

    }
    private void fillInternPoolOpeningRefs(Context ctx, Map<String, Referable> cache, Set<String> selectedTypes, InternPoolOpening entity, List<Referable> referableList) {
        if (selectedTypes.contains(Intern.class.getSimpleName())) {
            InternQuery internQuery = new InternQuery();
            internQuery.setId(singletonList(new StringParameter(entity.getInterns())));
            List<Intern> interns = internService.query(ctx, internQuery);
            referableList.addAll(interns);
        }
    }
    private void fillPublisherRefs(Context ctx, Map<String, Referable> cache, Set<String> selectedTypes, Publisher entity, List<Referable> referableList) {

    }
    private void fillVacancyRefs(Context ctx, Map<String, Referable> cache, Set<String> selectedTypes, Vacancy entity, List<Referable> referableList) {
        if (selectedTypes.contains(Company.class.getSimpleName())) {
            CompanyQuery companyQuery = new CompanyQuery();
            companyQuery.setId(singletonList(new StringParameter(entity.getWorkPlace())));
            List<Company> companies = companyService.query(ctx, companyQuery);
            referableList.addAll(companies);
        }
        if (selectedTypes.contains(Applicant.class.getSimpleName())) {
            ApplicantQuery applicantQuery= new ApplicantQuery();
            applicantQuery.setId(singletonList(new StringParameter(entity.getId())));
            List<Applicant> applicants = applicantService.query(ctx, applicantQuery);
            referableList.addAll(applicants);
        }
        if (selectedTypes.contains(HiringManager.class.getSimpleName())) {
            HiringManagerQuery hiringManagerQuery= new HiringManagerQuery();
            hiringManagerQuery.setId(singletonList(new StringParameter(entity.getHiringManager())));
            List<HiringManager> hiringManagers = hiringManagerService.query(ctx, hiringManagerQuery);
            referableList.addAll(hiringManagers);
        }

    }
    private void fillApplicantRefs(Context ctx, Map<String, Referable> cache, Set<String> selectedTypes, Applicant entity, List<Referable> referableList) {
        if (selectedTypes.contains(Intern.class.getSimpleName())) {
            InternQuery internQuery = new InternQuery();
            internQuery.setId(singletonList(new StringParameter(entity.getInternId())));
            List<Intern> interns = internService.query(ctx, internQuery);
            referableList.addAll(interns);
        }
        if (selectedTypes.contains(Vacancy.class.getSimpleName())) {
            VacancyQuery vacancyQuery = new VacancyQuery();
            vacancyQuery.setId(singletonList(new StringParameter(entity.getVacancyId())));
            List<Vacancy> vacancies = vacancyService.query(ctx, vacancyQuery);
            referableList.addAll(vacancies);
        }
    }


    @Override
    public Class<? extends GraphQLResolver> type() {
        return ExternalRefResolver.class;
    }
}



