const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

  function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
  }

  // Regular
  console.log('hello')

  // Interpolated
  console.log('Hello I am %s', 'Kilian')

  // Styled
  console.log('%c Hello friends', 'font-size: 20px; background-color: green;')

  // warning!
  console.warn('Warning !')

  // Error :|
  console.error('Erroooooor')

  // Info
  console.info('info')

  // Testing
  console.assert( 1 === 2, 'It is false')

  // clearing
  console.clear()

  // Viewing DOM Elements
  // const p = document.querySelector(p)
  // console.dir(p)

  // Grouping together
  dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.log(`He is ${dog.age}`)
    console.groupEnd(`${dog.name}`)
  })

  // counting
  console.count('Kilian')
  console.count('Kilian')
  console.count('Kilian')
  console.count('Kilian')
  console.count('Rox')
  console.count('Rox')
  console.count('Rox')
  console.count('Rox')
  console.count('Kilian')
  console.count('Rox')

  // timing    
  console.time('fetching data')
  fetch('https://api.github.com/users/MyNameIsKilian')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('fetching data')
      console.log(data)
    })

  // table
  console.table(dogs)