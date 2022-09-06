let json = {
    "name": "John",
    "age": 30
};

class ValidationErr extends Error {
    constructor(message) {
        super(message);
        this.name = `Validation Erorr`;
    }
}

function readUser(json) {
    let user = JSON.parse(json);
    
    if(!user.age) throw new ValidationErr(`No age field`);
    if(!user.name) throw new ValidationErr(`No name field`);

    return user;
    
}

try{
    let user = readUser(`{"age": 25}`)
}catch(err){
    if(err instanceof ValidationErr) console.log(`Wrong data ${err.message}`);
    if(err instanceof SyntaxError) console.log(`JSON wrong syntax ${err.message}`);

}

//---------------------------------------------------
class PropertyRequiredError extends ValidationErr {
    constructor(prop) {
        super(`No value  ${prop}`);
        this.name = `PropertyRequiredError`;
        this.prop = prop;
    }
}

function readUser1(json) {
    let user = JSON.parse(json);
    
    if(!user.age) throw new PropertyRequiredError(`No age field`);
    if(!user.name) throw new PropertyRequiredError(`No name field`);

    return user;
    
}

try{
    let user = readUser1(`{"age": 25}`);
}catch(err){
    if( err instanceof ValidationErr) {
        console.log(`Wrong data ${err.message}`);
        console.log(err.name);
        console.log(err.prop);
    }
    if(err instanceof SyntaxError) console.log(`Wrong synt ${err.message}`);
}


//----------------------------------------------------------------------------------------

class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
  class ValidationError extends MyError { }
  
  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("Нет свойства: " + property);
      this.property = property;
    }
  }
try{
    throw new MyError(`ell`)
    throw new PropertyRequiredError(`Field Name`)
}catch(err){
    console.log(err.message);
}


//---------------------------------------------------------------------------------
class ReadError extends Error {
    constructor(message, cause) {
      super(message);
      this.cause = cause;
      this.name = 'ReadError';
    }
  }
  
  class ValidationError extends Error { /*...*/ }
  class PropertyRequiredError extends ValidationError { /* ... */ }
  
  function validateUser(user) {
    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
  
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }
  }
  
  function readUser(json) {
    let user;
  
    try {
      user = JSON.parse(json);
    } catch (err) {
      if (err instanceof SyntaxError) {
        throw new ReadError("Синтаксическая ошибка", err);
      } else {
        throw err;
      }
    }
  
    try {
      validateUser(user);
    } catch (err) {
      if (err instanceof ValidationError) {
        throw {ma:"msms"};
      } else {
        throw err;
      }
    }
  
  }
  
  try {
    readUser('{bad json}');
  } catch (e) {
    if (e instanceof ReadError) {
      alert(e);
      // Исходная ошибка: SyntaxError:Unexpected token b in JSON at position 1
      alert("Исходная ошибка: " + e.cause);
    } else {
      throw e;
    }
  }
