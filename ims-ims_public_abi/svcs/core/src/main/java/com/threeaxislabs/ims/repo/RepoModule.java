package com.threeaxislabs.ims.repo;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.threeaxislabs.ims.domain.*;
import com.threeaxislabs.ims.domain.entity.Company;
import com.threeaxislabs.ims.domain.query.CompanyQuery;
import com.threeaxislabs.infinistack.persistence.SessionFactory;
import com.threeaxislabs.infinistack.persistence.Store;
import com.threeaxislabs.infinistack.persistence.store.*;
import com.threeaxislabs.infinistack.persistence.store.postgres.*;
import com.threeaxislabs.infinistack.service.executor.TaskExecutorService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.SynchronousQueue;
import java.util.concurrent.TimeUnit;
import com.threeaxislabs.ims.domain.entity.User;
import com.threeaxislabs.ims.domain.entity.UserGroup;
import com.threeaxislabs.ims.domain.entity.UserRole;
import com.threeaxislabs.ims.domain.query.UserGroupQuery;
import com.threeaxislabs.ims.domain.query.UserQuery;
import com.threeaxislabs.ims.domain.query.UserRoleQuery;

@Configuration
@ComponentScan(basePackages = {"com.threeaxislabs.ims.repo"})
public class RepoModule {

    @Bean
    public ObjectMapper mapper() {
        return ObjectMappers.MAPPER;
    }

    @Bean(destroyMethod = "shutdown")
    public ExecutorService executor() {

        return new TaskExecutorService(
                Runtime.getRuntime().availableProcessors() * 2,
                1024,
                60L, TimeUnit.SECONDS,
                new SynchronousQueue<>(),
                TaskExecutorService.THREAD_FACTORY,
                TaskExecutorService.REJECTED_EXECUTION_HANDLER
        );

    }

    @Bean(destroyMethod = "close")
    public DataSource dataSource() throws Exception {
        return new PgDataSource();
    }

    @Bean(destroyMethod = "close")
    public SessionFactory sessionFactory(ExecutorService executor, DataSource dataSource) throws Exception {
        return new PgSessionFactory(executor, dataSource);
    }

    @Bean
    public ServiceBundle serviceBundle(ObjectMapper mapper, DataSource dataSource) {
        String basePackage = "com.threeaxislabs.ims.domain";

        ReflectionService reflectionService = new ReflectionService(basePackage);
        StatementExecutor statementExecutor = new PgStatementExecutor(dataSource);
        SchemaService schemaService = new PgSchemaService("ims", reflectionService, statementExecutor);
        FilterService filterService = new PgFilterService(mapper, new PgIndexService(reflectionService), reflectionService);

        return new PgServiceBundle(mapper, reflectionService, schemaService, filterService);
    }

    @Bean
    public Store<Intern, InternQuery> taskStore(ServiceBundle bundle) {
        return new PgStore<>(Intern.class, bundle);
    }

    @Bean
    public Store<Publisher, PublisherQuery> publisherStore(ServiceBundle bundle) {
        return new PgStore<>(Publisher.class, bundle);
    }

    @Bean
    public Store<Company, CompanyQuery> companyStore(ServiceBundle bundle) {
        return new PgStore<>(Company.class, bundle);
    }

    @Bean
    public Store<Applicant, ApplicantQuery> applicantStore(ServiceBundle bundle) {
        return new PgStore<>(Applicant.class, bundle);
    }
    @Bean
    public Store<HiringManager, HiringManagerQuery> hiringManagerStore(ServiceBundle bundle) {
        return new PgStore<>(HiringManager.class, bundle);
    }
    @Bean
    public Store<Admin, AdminQuery> adminStore(ServiceBundle bundle) {
        return new PgStore<>(Admin.class, bundle);
    }
    @Bean
    public Store<InternPoolOpening, InternPoolOpeningQuery> internPoolOpeningStore(ServiceBundle bundle) {
        return new PgStore<>(InternPoolOpening.class, bundle);
    }
    @Bean
    public Store<Vacancy, VacancyQuery> vacancyStore(ServiceBundle bundle) {
        return new PgStore<>(Vacancy.class, bundle);
    }
    @Bean
    public Store<HiringProcess, HiringProcessQuery> hiringProcessStore(ServiceBundle bundle) {
        return new PgStore<>(HiringProcess.class, bundle);
    }
    @Bean
    public Store<User, UserQuery> userStore(ServiceBundle bundle) {
        return new PgStore<>(User.class, bundle);
    }


    @Bean
    public Store<UserGroup, UserGroupQuery> userGroupStore(ServiceBundle bundle) {
        return new PgStore<>(UserGroup.class, bundle);
    }

    @Bean
    public Store<UserRole, UserRoleQuery> userRoleStore(ServiceBundle bundle) {
        return new PgStore<>(UserRole.class,bundle);
}



}
