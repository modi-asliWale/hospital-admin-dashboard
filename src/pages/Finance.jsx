import { useEffect, useState } from 'react'
import FinancialSummary from '../components/Dashboard/FinancialSummary'
import RevenueChart from '../components/Financial/RevenueChart'
import ExpenseBreakdown from '../components/Financial/ExpenseBreakdown'
import BudgetComparison from '../components/Financial/BudgetComparison'
import CashFlowChart from '../components/Financial/CashFlowChart'
import { fetchFinancialHighlights } from '../services/dashboardService'

const Finance = () => {
  const [loading, setLoading] = useState(true)
  const [performance, setPerformance] = useState(null)
  const [kpis, setKpis] = useState([])
  const [cashFlow, setCashFlow] = useState(null)

  useEffect(() => {
    let isMounted = true

    fetchFinancialHighlights().then((payload) => {
      if (!isMounted) return
      setPerformance(payload.financialPerformance)
      setKpis(payload.financialHighlights.kpis)
      setCashFlow(payload.financialHighlights.cashFlow)
      setLoading(false)
    })

    return () => {
      isMounted = false
    }
  }, [])

  if (loading || !performance || !cashFlow) {
    return (
      <div className="page-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading financial data...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="page-section">
      <h1 className="page-title">Financial Overview</h1>
      <p className="page-subtitle">Revenue cycle, expense allocation, and profitability metrics</p>

      <FinancialSummary data={performance} />

      <div className="grid grid--2">
        <RevenueChart data={performance} />
        <ExpenseBreakdown data={performance.expenseBreakdown} />
      </div>

      <div className="grid grid--2">
        <BudgetComparison kpis={kpis} />
        <CashFlowChart data={cashFlow} />
      </div>
    </div>
  )
}

export default Finance
