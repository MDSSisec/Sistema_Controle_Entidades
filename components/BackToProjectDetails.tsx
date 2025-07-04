import Link from "next/link";
import React from "react";

export function BackToProjectDetails() {
  return (
    <div style={{ margin: "24px 0 8px 0", paddingLeft: 24, paddingRight: 24 }}>
      <Link href="/detalhe-projeto">
        <button style={{ padding: "8px 20px", borderRadius: 6, background: "#f3f4f6", border: "1px solid #e5e7eb", fontWeight: 500, cursor: "pointer" }}>
          ← Voltar para Detalhes do Projeto
        </button>
      </Link>
    </div>
  );
} 