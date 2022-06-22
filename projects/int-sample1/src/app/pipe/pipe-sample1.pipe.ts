import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSample1'
})
export class PipeSample1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
