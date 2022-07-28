export function add(a: number, b: number): number
{
    return a + b;
}

/**
 * Convertit une lettre sur 2 en majuscule
 * @param title 
 */
export function stringYoYo(title: string): string
{
    const arr = title.split('');

    const newArr = arr.map((letter, index) =>
    {
        if (index % 2 == 0) 
        {
            return letter.toUpperCase();
        }

        return letter;

    });

    return newArr.join('');
}