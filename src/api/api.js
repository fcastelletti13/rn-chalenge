export const getPlates = () =>{
  let ret
  fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=ed087624ad1a490ca68b709efcbd6c02')
  .then((response) => {
    ret = response.json();
    console.log(response)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  return ret
}

export const getInfoPlate = (id) =>{
  let ret
  fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=ed087624ad1a490ca68b709efcbd6c02`)
  .then((response) => {
    ret = response.data;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  return ret
}
