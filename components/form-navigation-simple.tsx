"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface FormNavigationSimpleProps {
  currentForm: string;
}

const FORM_ORDER = [
  "01-projeto",
  "02-entidade", 
  "03-representante-legal",
  "04-responsavel-tecnico"
];

const FORM_NAMES: Record<string, string> = {
  "01-projeto": "I.1 - Projeto",
  "02-entidade": "I.2 - Entidade",
  "03-representante-legal": "I.3 - Representante Legal",
  "04-responsavel-tecnico": "I.4 - Responsável Técnico"
};

export function FormNavigationSimple({ currentForm }: FormNavigationSimpleProps) {
  const router = useRouter();
  const currentIndex = FORM_ORDER.indexOf(currentForm);
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      const previousForm = FORM_ORDER[currentIndex - 1];
      router.push(`/formularios/01-identificacao/${previousForm}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < FORM_ORDER.length - 1) {
      const nextForm = FORM_ORDER[currentIndex + 1];
      router.push(`/formularios/01-identificacao/${nextForm}`);
    }
  };

  const isFirstForm = currentIndex === 0;
  const isLastForm = currentIndex === FORM_ORDER.length - 1;
  const currentFormName = FORM_NAMES[currentForm] || currentForm;

  return (
    <div style={{
      position: "fixed",
      top: "80px",
      right: "20px",
      background: "white",
      border: "2px solid #000000",
      borderRadius: "8px",
      padding: "1rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
      minWidth: "200px"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "center"
      }}>
        <span style={{
          fontSize: "0.875rem",
          color: "#6b7280",
          fontWeight: "500"
        }}>
          {currentIndex + 1} de {FORM_ORDER.length}
        </span>
        
        <div style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center"
        }}>
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevious}
            disabled={isFirstForm}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              fontSize: "0.875rem",
              padding: "0.5rem 0.75rem",
              border: "1px solid #000000",
              background: "white",
              color: "#111827"
            }}
          >
            <ChevronLeft style={{ width: "1rem", height: "1rem" }} />
            Voltar
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            disabled={isLastForm}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              fontSize: "0.875rem",
              padding: "0.5rem 0.75rem",
              border: "1px solid #000000",
              background: "white",
              color: "#111827"
            }}
          >
            Avançar
            <ChevronRight style={{ width: "1rem", height: "1rem" }} />
          </Button>
        </div>
      </div>
    </div>
  );
} 