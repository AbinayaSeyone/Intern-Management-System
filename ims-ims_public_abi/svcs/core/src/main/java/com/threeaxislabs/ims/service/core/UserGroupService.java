package com.threeaxislabs.ims.service.core;
import com.threeaxislabs.ims.domain.entity.UserGroup;
import com.threeaxislabs.ims.domain.entity.UserRole;
import com.threeaxislabs.ims.domain.query.UserGroupQuery;
import com.threeaxislabs.ims.domain.query.UserRoleQuery;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.util.IdGenerator;
import org.springframework.stereotype.Service;

@Service
public class UserGroupService extends EntityService<UserGroup, UserGroupQuery> {
    public UserGroupService(Store<UserGroup, UserGroupQuery> store, IdGenerator idGenerator) {
        super(store,idGenerator);
    }
}