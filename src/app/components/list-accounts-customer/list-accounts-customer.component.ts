import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BankAccountModel} from "../../models/bank-account-model";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService} from "../../services/accounts/account.service";
import {UpdateBankAccountStatusModel} from "../../models/update-bank-account-status.model";

@Component({
  selector: 'app-list-accounts-customer',
  templateUrl: './list-accounts-customer.component.html',
  styleUrls: ['./list-accounts-customer.component.css']
})
export class ListAccountsCustomerComponent implements OnInit{
  accounts!: Observable<Array<BankAccountModel>>;
  customerId!: number;
  errorMessage: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private accountService: AccountService) {
  }


  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.params["id"];
    this.getAllCustomersBankAccount();
  }

  getAllCustomersBankAccount(): void{
    this.accounts = this.accountService.getAllBankAccountByCustomerId(this.customerId);
  }

  updateBankAccountStatus(account: BankAccountModel) {
    let model : UpdateBankAccountStatusModel = new UpdateBankAccountStatusModel();
    if(account.status == 'CREATED' || account.status == 'SUSPENDED'){
      model.status = 'ACTIVATED';
    }else {
      model.status = 'SUSPENDED';
    }
    this.accountService.updateBankAccountStatus(account.id, model).subscribe(
      b => {
        alert("LE STATUS DU COMPES BANCAIRE A ETE MODIFIER: "+b.status);
        this.getAllCustomersBankAccount();
      }
    );
  }
}
