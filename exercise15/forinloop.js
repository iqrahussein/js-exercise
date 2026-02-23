const persons=
  {
  name:"iqra",
  age:"22",
  gender:"female",
  city:"mogadisgu",
  

  }

// console.log(persons)

for(const key in persons){
  console.log(key+":"+persons[key])
}