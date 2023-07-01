package org.grp.ebankingbackend.services;

import org.grp.ebankingbackend.daos.AccountHistoryDTO;
import org.grp.ebankingbackend.daos.AccountOperationDTO;
import org.grp.ebankingbackend.daos.BankAccountDTO;
import org.grp.ebankingbackend.daos.CustomerDTO;
import org.grp.ebankingbackend.entities.BankAccount;
import org.grp.ebankingbackend.entities.CurrentAccount;
import org.grp.ebankingbackend.entities.SavingAccount;
import org.grp.ebankingbackend.exceptions.BalanceNotSufficientException;
import org.grp.ebankingbackend.exceptions.BankAccountNotFoundException;
import org.grp.ebankingbackend.exceptions.CustomerNotFoundException;

import java.util.List;

public interface BankAccountService {

    CustomerDTO saveCustomer(CustomerDTO customerDTO);
    CurrentAccount saveCurrentBankAccount(double initialBalance, double overDraft, Long customerId) throws CustomerNotFoundException;
    SavingAccount saveSavingBankAccount(double initialBalance, double interestRate, Long customerId) throws CustomerNotFoundException;
    List<CustomerDTO> listCustomers();
    BankAccount getBankAccount(String customerId) throws BankAccountNotFoundException;
    void debit(String accountId, double amount, String description) throws BankAccountNotFoundException, BalanceNotSufficientException;
    void credit(String accountId, double amount, String description) throws BankAccountNotFoundException;
    void transfer(String accountIdSource, String accountIdDestination, double amount) throws BankAccountNotFoundException, BalanceNotSufficientException;
    List<BankAccountDTO> bankAccountList();
    CustomerDTO getCustomer(Long customerId) throws CustomerNotFoundException;
    CustomerDTO updateCustomer(CustomerDTO customerDTO);
    void deleteCustomerById(Long customerId);
    List<AccountOperationDTO> accountHistory(String accountId);
    AccountHistoryDTO getAccountHistory(String accountId, int page, int size) throws BankAccountNotFoundException;
    List<CustomerDTO> searchCustomers(String keyword);
    List<BankAccountDTO> listBankAccountByCustomer(String customerId);

}
