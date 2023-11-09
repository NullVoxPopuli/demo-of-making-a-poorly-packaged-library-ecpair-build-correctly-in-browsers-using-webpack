import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

interface ImportsSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which ...attributes is applied in the component template
  Element: null;
}

import { ECPairFactory, type ECPairAPI } from 'ecpair';

export default class Example extends Component<ImportsSignature> {
  @tracked res = 'none';

  @action button1() {
    this.res = 'step 1: ' + ECPairFactory;
  }
}

