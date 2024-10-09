## We are creating String calculator
/[^\d,;\n-]+/g => Removes all special characters except digits, commas, newlines, hyphens, and semicolons
/[\s,*\n;]+/ => Splits by spaces, commas, semicolons, asterisks, or newlines
