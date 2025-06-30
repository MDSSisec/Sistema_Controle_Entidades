"use client"

import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'number' | 'date';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[]; // Para campos select
  rows?: number; // Para textarea
}

interface FormularioProps {
  title: string;
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  submitButtonText?: string;
  className?: string;
}

export function Formulario({ 
  title, 
  fields, 
  onSubmit, 
  submitButtonText = "Enviar",
  className = ""
}: FormularioProps) {
  const [formData, setFormData] = React.useState<Record<string, string>>({});

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderField = (field: FormField) => {
    const commonProps = {
      id: field.id,
      placeholder: field.placeholder,
      required: field.required,
    };

    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
            rows={field.rows || 4}
            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive resize-vertical min-h-[100px]"
          />
        );
      
      case 'select':
        return (
          <Select 
            value={formData[field.id] || ''} 
            onValueChange={(value) => handleInputChange(field.id, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      default:
        return (
          <Input
            {...commonProps}
            type={field.type}
            value={formData[field.id] || ''}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
          />
        );
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(field => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id}>
                {field.label}
                {/* {field.required && <span className="text-destructive ml-1">*</span>} */}
              </Label>
              {renderField(field)}
            </div>
          ))}
          <Button type="submit" className="w-full">
            {submitButtonText}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
