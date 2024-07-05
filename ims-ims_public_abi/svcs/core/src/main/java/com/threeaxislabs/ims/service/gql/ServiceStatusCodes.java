package com.threeaxislabs.ims.service.gql;
import com.threeaxislabs.infinistack.service.StatusCode;
import com.threeaxislabs.infinistack.service.StatusCodes;

public interface ServiceStatusCodes extends StatusCodes {
    StatusCode SC_INVALID_USERNAME = new StatusCode("E1053", "Invalid username or password");
    StatusCode SC_INVALID_PASSWORD = new StatusCode("E1054", "Invalid username or password");
    StatusCode SC_AUTHORIZATION_INVALID = new StatusCode("E1055", "Invalid authorization!");
    StatusCode SC_AUTHORIZATION_MISSING = new StatusCode("E1056", "Authorization missing!");
    StatusCode SC_AUTHORIZATION_EXPIRED = new StatusCode("E1057", "Authorization expired!");
    StatusCode SC_PASSWORD_CHANGE_REQUIRED = new StatusCode("E1058", "Password expired!");
    StatusCode SC_USER_LOCKED = new StatusCode("E1059", "User is locked!");
    StatusCode SC_USER_NOT_ACTIVE = new StatusCode("E1060", "User is not active!");
    StatusCode SC_ACCOUNT_DOES_NOT_EXIST = new StatusCode("E1062", "Can't find account, it might have been deleted or does not exist!");
    StatusCode SC_ACCESS_DENIED = new StatusCode("E1064", "You don't have sufficient access to the record!");
}
