import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JsonPipe} from "@angular/common";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-gpt',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    ButtonModule
  ],
  templateUrl: './gpt.component.html',
  styleUrl: './gpt.component.css'
})
export class GptComponent implements OnInit{
    queryFormGroup !: FormGroup
    messages = [
      {role : "system", content : "Hello !"}
    ];
    result : any;
  constructor( private fb: FormBuilder , private httpClient : HttpClient) {
  }
  ngOnInit() {
      this.queryFormGroup = this.fb.group({
        query : this.fb.control("")
      })
  }
  handleAskGPT() {
      let url = "https://api.openai.com/v1/chat/completions";
       let httpHeaders = new HttpHeaders()
         .set("Authorization", "Bearer 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")
         let payload = {
           model : "gpt-3.5-turbo",
           messages : this.messages
         }
        this.httpClient.post(url,payload, {headers: httpHeaders})
          .subscribe({
            next :(resp)=>{
              this.result=resp;
            },
            error:(err)=>{
            }
          })
  }
}


