import React, { createContext, useContext, useEffect, useState } from "react";

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
    const [balance, setBalance] = useState(() => {
        const savedBalance = localStorage.getItem('balance');
        return savedBalance ? parseFloat(savedBalance) : 0;
    });

    const [credits, setCredits] = useState(() => {
        // const defaultCredits = [{ title: '', amount: 0, id: 0 }];
        const savedCredits = JSON.parse(localStorage.getItem('credits')) || [];
        return savedCredits.map(credit => ({
            ...credit,
            amount: parseFloat(credit.amount) // Ensure amount is a number
        }));
    });

    const [debits, setDebits] = useState(() => {
        // const defaultDebits = [{ title: '', amount: 0, id: 0 }];
        const savedDebits = JSON.parse(localStorage.getItem('debits')) || [];
        return savedDebits.map(debit => ({
            ...debit,
            amount: parseFloat(debit.amount) // Ensure amount is a number
        }));
    });

    const calculateCreditBalance = () => credits.reduce((acc, curr) => acc + curr.amount, 0);
    const calculateDebitBalance = () => debits.reduce((acc, curr) => acc + curr.amount, 0);

    const [creditBalance, setCreditBalance] = useState(calculateCreditBalance);
    const [debitBalance, setDebitBalance] = useState(calculateDebitBalance);

    useEffect(() => {
        localStorage.setItem('balance', balance.toString());
    }, [balance]);

    useEffect(() => {
        localStorage.setItem('credits', JSON.stringify(credits));
        setCreditBalance(calculateCreditBalance());
    }, [credits]);

    useEffect(() => {
        localStorage.setItem('debits', JSON.stringify(debits));
        setDebitBalance(calculateDebitBalance());
    }, [debits]);

    const AddBalance = (credit, debit) => {
        const newBalance = balance + (credit - debit);
        setBalance(newBalance);
    };

    const AddCredit = (amount, title) => {
        const newCredit = [...credits, { id: credits.length + 1, amount: parseFloat(amount), title }];
        setCredits(newCredit);
        setBalance(balance + parseFloat(amount));
    };

    const AddDebit = (amount, title) => {
        const newDebit = [...debits, { id: debits.length + 1, amount: parseFloat(amount), title }];
        setDebits(newDebit);
        setBalance(balance - parseFloat(amount));
    };

    const DeleteCredit = (id) => {
        const updatedCredits = credits.filter(credit => credit.id !== id);
        setCredits(updatedCredits);
        const creditToRemove = credits.find(credit => credit.id === id);
        if (creditToRemove) {
            setBalance(balance - parseFloat(creditToRemove.amount));
        }
    };

    const DeleteDebit = (id) => {
        const updatedDebits = debits.filter(debit => debit.id !== id);
        setDebits(updatedDebits);
        const debitToRemove = debits.find(debit => debit.id === id);
        if (debitToRemove) {
            setBalance(balance + parseFloat(debitToRemove.amount)); // Correctly add the amount back to the balance
        }
    };

    const ResetAll = () => {
        setBalance(0);
        setCreditBalance(0);
        setDebitBalance(0);

        // const defaultCredits = [{ id: 0, title: 'Initial Credit', amount: 0 }];
        // const defaultDebits = [{ id: 0, title: 'Initial Debit', amount: 0 }];

        setCredits([]);
        setDebits([]);
    };

    return (
        <TransactionContext.Provider
            value={{
                balance,
                credits,
                creditBalance,
                debits,
                debitBalance,
                AddBalance,
                AddCredit,
                AddDebit,
                DeleteCredit,
                DeleteDebit,
                ResetAll
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};

const useTransaction = () => useContext(TransactionContext);

export { TransactionProvider, useTransaction };
