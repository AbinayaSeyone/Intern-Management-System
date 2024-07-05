package com.threeaxislabs.ims.service.core;


import com.threeaxislabs.ims.domain.Vacancy;
import com.threeaxislabs.ims.domain.VacancyQuery;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.util.IdGenerator;
import org.springframework.stereotype.Service;

@Service
public class VacancyService extends EntityService<Vacancy, VacancyQuery> {

    public VacancyService(Store<Vacancy, VacancyQuery> store, IdGenerator idGenerator) {
        super(store,idGenerator);
    }
}
