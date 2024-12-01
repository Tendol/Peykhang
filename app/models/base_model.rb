module BaseModel
  extend ActiveSupport::Concern

  def id
    super if defined?(super)  # Delegates to ActiveRecord if available
  end

  def _id
    id  # Delegates to the id method
  end

  def _type
    self.class.name  # Returns the class name, often useful for type checking
  end

  def root
    self
  end

  def embedded?
    false
  end

  def model_name
    self.class.model_name
  end

  def parent_class
    self.class.superclass
  end
end
