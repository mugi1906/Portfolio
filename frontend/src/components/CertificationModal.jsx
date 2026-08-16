import { useEffect } from "react";

export default function CertificationModal({ certification, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [onClose]);

    if (!certification) return null;

    return (
        <div
            className="cert-modal-overlay"
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "rgba(15, 32, 56, 0.65)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
                animation: "certOverlayIn 0.25s ease",
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: "100%",
                    maxWidth: 850,
                    maxHeight: "90vh",
                    overflowY: "auto",
                    background: "#fff",
                    borderRadius: 22,
                    padding: 28,
                    boxShadow: "0 30px 80px rgba(15, 32, 56, 0.3)",
                    animation: "certModalIn 0.3s ease",
                    position: "relative",
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    aria-label="Close certificate"
                    style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        border: "1px solid var(--border)",
                        background: "#fff",
                        color: "var(--ink)",
                        fontSize: 20,
                        cursor: "pointer",
                        zIndex: 2,
                    }}
                >
                    ×
                </button>

                {/* Certificate Image */}
                <div
                    style={{
                        width: "100%",
                        background: "var(--bg-alt)",
                        borderRadius: 14,
                        padding: 12,
                        marginBottom: 24,
                        minHeight: 250,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {certification.image ? (
                        <img
                            src={certification.image}
                            alt={`${certification.title} certificate`}
                            style={{
                                width: "100%",
                                maxHeight: 500,
                                objectFit: "contain",
                                borderRadius: 10,
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                textAlign: "center",
                                padding: 50,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 42,
                                    marginBottom: 12,
                                }}
                            >
                                📜
                            </div>

                            <h3 style={{ fontSize: 18 }}>
                                Certification Pending
                            </h3>

                            <p
                                style={{
                                    color: "var(--ink-soft)",
                                    fontSize: 14,
                                    marginTop: 6,
                                }}
                            >
                                Certificate will be added once it is received.
                            </p>
                        </div>
                    )}
                </div>

                {/* Details */}
                <div>
                    <div
                        className="skill-group-title"
                        style={{ marginBottom: 6 }}
                    >
                        Certification
                    </div>

                    <h2
                        style={{
                            fontSize: 24,
                            marginBottom: 10,
                        }}
                    >
                        {certification.title}
                    </h2>

                    <p
                        style={{
                            color: "var(--ink-soft)",
                            fontSize: 15,
                            marginBottom: 18,
                        }}
                    >
                        {certification.description}
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                            gap: 12,
                        }}
                    >
                        <div
                            style={{
                                padding: 14,
                                background: "var(--bg-alt)",
                                borderRadius: 12,
                            }}
                        >
                            <div
                                style={{
                                    color: "var(--ink-faint)",
                                    fontSize: 12,
                                    marginBottom: 4,
                                }}
                            >
                                Provider
                            </div>

                            <strong>{certification.provider}</strong>
                        </div>

                        <div
                            style={{
                                padding: 14,
                                background: "var(--bg-alt)",
                                borderRadius: 12,
                            }}
                        >
                            <div
                                style={{
                                    color: "var(--ink-faint)",
                                    fontSize: 12,
                                    marginBottom: 4,
                                }}
                            >
                                Type
                            </div>

                            <strong>{certification.type}</strong>
                        </div>

                        <div
                            style={{
                                padding: 14,
                                background: "var(--bg-alt)",
                                borderRadius: 12,
                            }}
                        >
                            <div
                                style={{
                                    color: "var(--ink-faint)",
                                    fontSize: 12,
                                    marginBottom: 4,
                                }}
                            >
                                Status
                            </div>

                            <strong>{certification.status}</strong>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {`
          @keyframes certOverlayIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes certModalIn {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
            </style>
        </div>
    );
}