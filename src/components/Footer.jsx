export default function Footer() {
  return (
    <footer style={{
      padding: '4rem 0 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      borderTop: '1px solid var(--line)',
      marginTop: '5rem',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      color: 'var(--fg-mute)',
    }}>
      <div>
        <span>Ramani Pannirselvam &copy; {new Date().getFullYear()}</span>
        <span style={{ margin: '0 0.5rem' }}>·</span>
        <span>Fedora Linux Workstation</span>
      </div>

      <div>
        <a href="#" style={{ color: 'var(--fg-dim)' }}>
          Back to top &uarr;
        </a>
      </div>
    </footer>
  )
}
