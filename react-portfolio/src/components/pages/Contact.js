import React from 'react';

export default function Contact() {
  return (
    <div className='contact'>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Comment</label>
          <input type="input" class="form-control" id="exampleInputPassword1" placeholder="Comments"></input>
        </div>
        <div class="form-check">
          
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
