module SettingsHelpers
  def self.settings_json
      settings = YAML.load_file("config/settings.yml")
      @settings_json = settings.deep_transform_keys { |k| k.to_s.camelize(:lower) }.to_json
  end
end
