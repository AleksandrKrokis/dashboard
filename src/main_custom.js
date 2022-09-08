import axios from 'axios';

export const init = () => {
  axios.defaults.baseURL = 'http://185.177.93.71:8088/';
}

export class Lib {
  constructor(name) {
    if (name === 'ae') {
      this.lib = new AELib();
    } else if (name === 'pp') {
      this.lib = new PPLib();
    } else {
      throw new Error('unsupported lib name')
    }
  }

  /*
   *
   * @item Object gorse item model
   *
   * @return string path to
   */
  getItemImage(item) {
    return this.lib.getItemImage(item);
  }
}

class AELib {
  getItemImage(item) {
    return `https://www.machogaytube.com/thumbs/${item.ItemId}`;
  }
}

class PPLib {
  getItemImage(item) {
    console.log('implement me');
    return ''
  }
}
