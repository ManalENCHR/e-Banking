package org.grp.ebankingbackend.services;

import org.grp.ebankingbackend.entities.BankAccount;
import org.grp.ebankingbackend.entities.CurrentAccount;
import org.grp.ebankingbackend.entities.SavingAccount;
import org.grp.ebankingbackend.repositories.BankAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BankService {
    @Autowired
    private BankAccountRepository bankAccountRepository;
    public void consulter(){
        BankAccount bankAccount =
                bankAccountRepository.findById("10571c44-1684-4f1d-ba7c-a27a5626cebe").orElse(null);
        if(bankAccount!=null){
            System.out.println("*******************************");
            System.out.println(bankAccount.getId());
            System.out.println(bankAccount.getBalance());
            System.out.println(bankAccount.getStatus());
            System.out.println(bankAccount.getCreatedAt());
            System.out.println(bankAccount.getCustomer().getName());
            System.out.println(bankAccount.getClass().getSimpleName());
            if(bankAccount instanceof CurrentAccount){
                System.out.println("Over Draft=> "+((CurrentAccount)bankAccount).getOverDraft());
            } else if(bankAccount instanceof SavingAccount){
                System.out.println("Rate=> "+((SavingAccount)bankAccount).getInterestRate());
            }
            bankAccount.getAccountOperationList().forEach(op->{
                System.out.println("===========================================");
                System.out.println(op.getType()+"\t"+op.getOperationDate()+"\t"+op.getAmount());
            });
        }
    }
}
