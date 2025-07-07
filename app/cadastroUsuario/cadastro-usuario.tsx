"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IconX } from "@tabler/icons-react";
import styles from "./cadastro-usuario.module.css";
import React, { useState } from "react";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  dataCadastro: string;
  perfil: string;
}

interface CadastroUsuarioProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (usuario: Omit<Usuario, 'id' | 'dataCadastro'>) => void;
  title?: string;
}

export function CadastroUsuario({ 
  isOpen, 
  onClose, 
  onSubmit, 
  title = "Cadastrar Novo Usuário" 
}: CadastroUsuarioProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    perfil: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar se todos os campos estão preenchidos
    if (!formData.nome || !formData.email || !formData.perfil) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    // Chamar função de callback com os dados do usuário
    onSubmit(formData);
    
    // Limpar formulário
    setFormData({ nome: "", email: "", perfil: "" });
  };

  const handleCancel = () => {
    setFormData({ nome: "", email: "", perfil: "" });
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCancel}
            className={styles.closeButton}
          >
            <IconX className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <div className={styles.formFields}>
            <div className={styles.formField}>
              <Label htmlFor="nome">Nome Completo *</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Digite o nome completo"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                required
              />
            </div>
            
            <div className={styles.formField}>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite o email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            
            <div className={styles.formField}>
              <Label htmlFor="perfil">Perfil *</Label>
              <Select
                value={formData.perfil}
                onValueChange={(value) => handleInputChange("perfil", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o perfil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Administrador">Administrador</SelectItem>
                  <SelectItem value="Usuário">Usuário</SelectItem>
                  <SelectItem value="Editor">Editor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className={styles.modalFooter}>
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className={styles.cancelButton}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className={styles.submitButton}
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 