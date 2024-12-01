import { Select } from 'antd';
import React from 'react';
import { Settings } from 'frontend/components/Settings';

interface LanguageSelectProps {
  onChange?: (v: string[]) => void;
}
const LanguageSelect = ({ onChange }: LanguageSelectProps) => {
  const languageOptions = Object.entries(Settings.languages).map(([k, v]) => ({
    label: v,
    value: k,
  }));

  return (
    <Select
      showSearch
      onChange={onChange}
      placeholder="Select a language"
      mode="multiple"
      options={languageOptions}
    />
  );
};

export default LanguageSelect;