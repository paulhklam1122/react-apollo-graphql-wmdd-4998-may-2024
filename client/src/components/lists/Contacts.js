import { List } from 'antd'
import ContactCard from '../listItems/ContactCard'
import { useQuery } from '@apollo/client'
import { GET_CONTACTS } from '../../graphql/queries'

const Contacts = () => {
  const styles = getStyles()

  const { loading, error, data } = useQuery(GET_CONTACTS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  console.log('data', data)

  return (
    <List style={styles.list} grid={{ gutter: 20, column: 1 }}>
      {data.contacts.map(({ id, firstName, lastName }) => (
        <List.Item key={id}>
          <ContactCard id={id} firstName={firstName} lastName={lastName} />
        </List.Item>
      ))}
    </List>
  )
}

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center'
  }
})

export default Contacts
