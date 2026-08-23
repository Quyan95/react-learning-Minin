import Button from "./Button/Button"
import Modal from './Modal/Modal'
import { useEffect, useState } from "react"

export default function EffectSection() {
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])



    useEffect(() => {
        async function fetchUsers() {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await response.json()
            setUsers(users)
            setLoading(false)
        }

        fetchUsers()
    }, [])

    return (
        <section>
            <h3>Effects</h3>

            <Button onClick={() => setModal(true)}>Открыть информацию</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat distinctio necessitatibus culpa consequuntur nobis saepe facilis libero officiis, nisi quisquam.</p>
                <Button onClick={() => setModal(false)}>Close modal</Button>
            </Modal>

            {loading && <p>Loding...</p>}

            {!loading && <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>}
        </section>
    )
}