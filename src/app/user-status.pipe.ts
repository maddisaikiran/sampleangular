import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {

  transform(userStatus: boolean): string {
    if(userStatus == true){
      return "active";
    } else{
      return "disactive";
    }
  }

}
