package org.grp.ebankingbackend.web;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.grp.ebankingbackend.daos.CustomerDTO;
import org.grp.ebankingbackend.entities.Customer;
import org.grp.ebankingbackend.exceptions.CustomerNotFoundException;
import org.grp.ebankingbackend.services.BankAccountService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@CrossOrigin("*")
public class CustomerRestController {
    private BankAccountService bankAccountService;

    @GetMapping("/customers")
    public List<CustomerDTO> customers(){
        return bankAccountService.listCustomers();
    }

    @GetMapping("/customers/search")
    public List<CustomerDTO> searchCustomers(@RequestParam(name = "keyword",defaultValue = "") String keyword){
        return bankAccountService.searchCustomers("%"+keyword+"%");
    }

    @GetMapping("/customers/{id}")
    public CustomerDTO getCustomer(@PathVariable(name = "id") Long customerId) throws CustomerNotFoundException {
        return bankAccountService.getCustomer(customerId);
    }

    @PostMapping("/customers")
    public CustomerDTO saveCustomer(@RequestBody CustomerDTO customerDTO){
        CustomerDTO cust = bankAccountService.saveCustomer(customerDTO);
        bankAccountService.listCustomers().forEach(customer -> {
            try {
                if(customer.getId().equals(cust.getId())){
                    bankAccountService.saveCurrentBankAccount(Math.random() * 77000, 7000, cust.getId());
                    bankAccountService.saveSavingBankAccount(Math.random() * 170000, 5.5, cust.getId());
                }

            } catch (CustomerNotFoundException e) {
                e.printStackTrace();
            }
        });
        return cust;
    }

    @PutMapping("/customers/{customerId}")
    public CustomerDTO editCustomer(@PathVariable Long customerId, @RequestBody CustomerDTO customerDTO){
        return bankAccountService.updateCustomer(customerDTO);
    }

    @DeleteMapping("/customers/{id}")
    public void deleteCustomer(@PathVariable Long id){
        bankAccountService.deleteCustomerById(id);
    }
}
