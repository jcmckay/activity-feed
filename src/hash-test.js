// const hash = new Hash();
// hash.set('', '');
// hash.get('key');
// hash.delete('key');
// undo()
// redo()


function Hash() {

  this.hash = {};
  this.previous = null;
  this.deleteVal = null;
  this.undo = null;

  this.get = function(key) {
    return this.hash[key];
  }

  this.set = function(key, value) {
    if(!this.hash[key]) {
      this.deleteVal = {key: key, value: value};
    } else {
      this.previous = {key: key, value: this.hash[key]};
    }

    this.hash[key] = value;
    return this.hash;
  }

  this.delete = function(key) {
    if(!this.hash[key])
      return null;

    this.previous = {key: key, value: this.hash[key]};
    delete this.hash[key];

    return this.hash;
  }

  this.undo = function() {
    if(!this.previous) {
      throw Error('Nothing to Undo');
    }

    if(this.deleteVal) {
      this.previous = {...this.deleteVal};
      delete this.hash[key];
      this.deleteVal = null;
    } else {
      this.hash[this.previous.key] = this.previous.value;
      this.previous = null;
    }

    return this.hash;
  }

  this.redo = function() {
    if(!this.previous) {
      throw Error('Nothing to Undo');
    }
  }


}

const hash = new Hash();