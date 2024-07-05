package com.threeaxislabs.ims.service.gql.schema.resolver;
import java.util.Optional;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.BooleanNode;
import com.threeaxislabs.infinistack.persistence.EntityPatch;
import com.threeaxislabs.infinistack.persistence.EntityPatch.Op;
import com.threeaxislabs.ims.service.core.EntityService;
import com.threeaxislabs.infinistack.graphql.annotation.GraphQLArgument;
import com.threeaxislabs.infinistack.graphql.annotation.GraphQLMutation;
import com.threeaxislabs.infinistack.graphql.annotation.GraphQLQuery;
import com.threeaxislabs.infinistack.graphql.annotation.GraphQLRootContext;
import com.threeaxislabs.infinistack.persistence.Entity;
import com.threeaxislabs.infinistack.persistence.EntityPatch;
import com.threeaxislabs.infinistack.persistence.EntityQuery;
import com.threeaxislabs.infinistack.persistence.TxExecutor;
import com.threeaxislabs.infinistack.service.Context;
import com.threeaxislabs.infinistack.service.graphql.GraphQLResolver;

import java.util.List;

import static java.util.Collections.singletonList;

public abstract class EntityResolver<P extends Entity, Q extends EntityQuery> implements GraphQLResolver {
    protected final EntityService<P, Q> service;

    public EntityResolver(EntityService<P, Q> service) {
        this.service = service;
    }

    @GraphQLQuery
    public List<P> query(@GraphQLRootContext Context ctx, @GraphQLArgument(name = "query") Q query) {
        return TxExecutor.execute(ctx, () -> service.query(ctx, query));
    }

    @GraphQLMutation
    public P create(@GraphQLRootContext Context ctx, @GraphQLArgument(name = "value") P value) {
        return TxExecutor.execute(ctx, () -> service.create(ctx, value));
    }

    @GraphQLMutation
    public P update(@GraphQLRootContext Context ctx, @GraphQLArgument(name = "value") P value) {
        return TxExecutor.execute(ctx, () -> service.update(ctx, value));
    }

//    @GraphQLMutation
//    public P patch(@GraphQLRootContext Context ctx, @GraphQLArgument(name = "id") String id,
//                   @GraphQLArgument(name = "patch") EntityPatch patch) {
//        return TxExecutor.execute(ctx, () -> service.patch(ctx, id, singletonList(patch)));
//    }
        @GraphQLMutation
        public P patch(@GraphQLRootContext Context ctx, @GraphQLArgument(name = "id") String id,
                       @GraphQLArgument(name = "patch") List<EntityPatch> patch) {
            return TxExecutor.execute(ctx, () -> service.patch(ctx, id, patch));
        }
    @GraphQLMutation
    public Optional<P> delete(@GraphQLRootContext Context ctx, @GraphQLArgument(name = "value") P value) {
        return TxExecutor.execute(ctx, () -> service.delete(ctx,value));
    }



}