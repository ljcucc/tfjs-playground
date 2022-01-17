import React from 'react';

import EditorCell from './EditorCell';
import CodeObject from './CodeObject';


class EditorPage extends React.Component{ 

  // fake data
  constructor(props){
    super(props);

    console.log("regenerate codeobjs");

    this.codeobjs = [
      "print('hi')",
      `tf = imports.tf

# Define a model for linear regression.
model = tf.sequential()
model.add(tf.layers.dense({units: 1, inputShape: [1]}))

# Prepare the model for training: Specify the loss and the optimizer.
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'})

# Generate some synthetic data for training. 
xs = tf.tensor2d([1, 2, 3, 4], [4, 1])
ys = tf.tensor2d([1, 3, 5, 7], [4, 1])

# Train the model using the data.
@model.fit(xs, ys).then
def predict():
  # Use the model to do inference on a data point the model hasn't seen before:
  result = model.predict(tf.tensor2d([5], [1, 1]))
  print(result)
`
    ].map(item=>new CodeObject(item))

    this.codeobjs.forEach(item=>{
      item.updateEvent((id, e)=>{
        this.forceUpdate();
      });
    });
  }

  render(){
    var cells = this.codeobjs.map(item=>(
      <div>
        <EditorCell codeobj={item}/>
      </div>
    ));

    return (
      cells
    );
  }
}

export default EditorPage;
