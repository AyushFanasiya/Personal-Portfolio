const CVViewer = () => {
  return (
    <div className="cv-viewer-container" style={{ 
      width: '100%', 
      height: '100vh', 
      backgroundColor: 'var(--bg-color)',
      padding: '20px'
    }}>
      <iframe
        src="/AyushFanasiya.pdf"
        title="CV Viewer"
        style={{ 
          width: "100%", 
          height: "100%", 
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}
      >
        <p>
          Your browser doesn't support PDF viewing. 
          <a href="/AyushFanasiya.pdf" download>
            Click here to download the PDF
          </a>
        </p>
      </iframe>
    </div>
  );
};

export default CVViewer;