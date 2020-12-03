import React from 'react';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpense } from './components/IncomeExpense';
import  TransactionList  from './components/TransactionList'
import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProviderComponent } from '../src/context/GlobalContextState'

const App = () => {
  return (
    <div>

      <div>
        <Header />

      </div>
      <GlobalProviderComponent>
      <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        
</div>
      </GlobalProviderComponent>
      </div>
      
        
    




    
    
      
  )
}

export default App