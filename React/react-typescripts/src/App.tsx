// import { Greet } from './components/Greet'
// import { Person } from './components/Person'
// import { PersonList } from './components/PersonList'
// import { Status } from './components/Status'
// import { Heading } from './components/Heading'
// import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
// import { Container } from './components/Container'
// import { ThemeContextProvider } from './components/ThemeContext'
// import { Box } from './components/Box'
// import { UserContextProvider } from './components/UserContext'
// import { User } from './components/User'
// import { DomRefs } from './componentsDomRefs'
// import { MutableRef } from './componentsMutableRef'
// import './App.css'
// import { Counterr } from './components/Counterr'
// import { List } from './components/Lists'
// import { CustomButton } from './components/Button'
// import { RandomNumber } from './components/RandomNumber'
// import { Text } from './components/Text'
// import { Toast } from './components/Toast'


function App() {
  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }

  // const nameList = [
  //   {
  //     first: 'Romaisa',
  //     last: 'Shahbaz'
  //   },
  //   {
  //     first: 'Aleena',
  //     last: 'Qamar'
  //   },
  //   {
  //     first: 'Meer',
  //     last: 'Jibran'
  //   }
  // ]

  return (
    <div className='App'>
      
      {/* <Toast position='center' /> */}
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <Greet name='Natasha' isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar> <Heading>Oscar goes to Meee </Heading> </Oscar>
     
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      /> */}

  {/* <Input value='' handleChange={event => console.log(event)} /> */}

     {/* <Container styles={{ border: '1px solid black', padding: '1rem' }} /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRefs />
      <MutableRef />
      <Counterr message='The count value is ' /> */}

     {/* <Lists
        items={[
          {
            id: 1,
            first: 'Romaisa',
            last: 'Shahbaz'
          },
          {
            id: 2,
            first: 'Aleena',
            last: 'Qamar'
          },
          {
            id: 3,
            first: 'Meer',
            last: 'Jibran'
          }
        ]}
        onClick={item => console.log(item)}
      /> */}

      {/* <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Button Label
      </CustomButton> */}
      
      {/* <Text size='lg' as='h1'> Heading </Text> */}
      {/* <Text size='md' as='p'>  Paragraph </Text> */}
      {/* <Text size='sm' color='secondary' as='label' htmlFor='someId'>  Label </Text> */}
    </div>
  )
}

export default App