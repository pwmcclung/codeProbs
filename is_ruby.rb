def is_ruby_coming(list)
    count = 0
    list.each do |n|
      if n[:language] == 'Ruby'
         count += 1
         end
    end
    if count > 0
      return true
     else
    return false
    end
  end