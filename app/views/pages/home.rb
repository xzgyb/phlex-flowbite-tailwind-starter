# frozen_string_literal: true

class Views::Pages::Home < Views::Base
  def view_template
    main(class: "h-screen flex justify-center items-center") do
      div(class: "grid grid-cols-4 gap-1") do
        Button::COLORS.keys.each do |color|
          Button(color) { color.upcase  }
        end
      end
    end
  end
end
