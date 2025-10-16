const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="dashboard-footer">
      <span>© {year} MetroCare Health System</span>
      <span>HIPAA compliant • Secure data handling enforced</span>
    </footer>
  )
}

export default Footer
