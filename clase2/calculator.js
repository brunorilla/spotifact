module.exports = function Calculator() {

    this.result = 0;

    isNumber = (x)=> {
        if(isNaN(x) || typeof x !== 'number'){
            throw new Error('The result must be a number,' + typeof x + ' given');
        }
    }

    this.setResult = (x)=> {
        this.isNumber(x);
        this.result = x;
    }

    this.getResult = () => this.result;

    add = (x = 0) => {
        this.isNumber(x);
        this.setResult(this.getResult() + x);
    }

    sub = (x = 0) => {
        this.isNumber(x);
        this.setResult(this.getResult() -x);
    }

    div = (x = 1) => {
        this.isNumber(x);
        this.setResult(this.getResult() / x);
    }

    mul = (x = 0) => {
        this.isNumber(x);
        this.setResult(this.getResult() * x);
    }

    clear = () => this.setResult(0);

    return {
        add,
        sub,
        mul,
        div,
        getResult : this.getResult

    }

}