import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(content: string , limit:number = 50): string {
    return content.length > limit ? content.substring(0,limit)+ '...' : content;
  }

}
