import {Customer} from "./customer.model";

export interface AccountDetails {
  accountId:            string;
  balance:              number;
  type:                 string;
  createdAt:            Date;
  currentPage:          number;
  totalPages:           number;
  pageSize:             number;
  accountOperationDTOS: AccountOperation[];
}

export interface AccountOperation {
  id:            number;
  operationDate: Date;
  amount:        number;
  type:          string;
  description:   string;
}

export interface Account {
  accountId:            string;
  balance:              number;
  type:                 string;
  createdAt:            Date;
  statut:               string;
  customer:             Customer;
}
