import { useState } from 'react'

const VoteForm = () => {
    const [count, setCount] = useState(1)

    function decreaseCount() {
        setCount(prevCount => {
            if (prevCount <= 1 || !prevCount) {
                return 1
            }
            return parseInt(prevCount) - 1
        })
    }

    function increaseCount() {
        setCount(prevCount => {
            if (!prevCount) {
                return 1
            }
            return parseInt(prevCount) + 1
        })
    }

    function takeInput(event) {
        const value = event.target.value.replace(/\D/g, '');
        setCount(value)
    }

    function castVote(event) {
        setCount(1)
        event.preventDefault()
    }
    
    return (
        <div className="contestant">
            <img alt="candidate" src={require('./images/candidate.png')}/>
            <h3 className="contestant-name title-case">Adewale Akinola</h3>
            <p>750 votes</p>
            <form onSubmit={castVote} className='vote-form'>
                <div>
                    <span className='btn update-vote' onClick={decreaseCount}>-</span>
                    <input className='vote-cast' type={'text'} value={count} onChange={takeInput} name='count'/>
                    <span className='btn update-vote' onClick={increaseCount}>+</span>
                </div>
                <button className="btn submit-vote">vote</button>
            </form>
        </div>
    )
}

export default VoteForm
