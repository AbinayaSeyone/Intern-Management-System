package com.threeaxislabs.ims.service.core;
import com.threeaxislabs.ims.domain.entity.User;
import com.threeaxislabs.ims.domain.entity.UserRole;
import com.threeaxislabs.ims.domain.query.UserQuery;
import com.threeaxislabs.ims.domain.query.UserRoleQuery;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.util.IdGenerator;
import org.springframework.stereotype.Service;

@Service
public class UserRoleService extends EntityService<UserRole, UserRoleQuery> {
    public UserRoleService(Store<UserRole, UserRoleQuery> store, IdGenerator idGenerator) {
        super(store,idGenerator);
    }
}