class PokeScan:
    def __init__(self, name, level, pkmntype):
        self.name = name
        self.level = level 
        self.pkmntype = pkmntype
        
    def info(self):
        if self.level <= 20:
            strength = 'weak'
        elif self.level <= 50:
            strength = 'fair'
        elif self.level > 50:
            strength = 'strong'
        
        types = {'water':'wet','fire':'fiery','grass':'grassy'}
            
        return f"{self.name}, a {types[self.pkmntype]} and {strength} Pokemon."