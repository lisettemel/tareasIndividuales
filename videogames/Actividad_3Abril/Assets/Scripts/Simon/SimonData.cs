using System.Collections;
using System.Collections.Generic;


/* Define class for stored data of button from data base */

[System.Serializable]
public class ColorButton
{
    public int id;
    public float r;
    public float g;
    public float b;


    

}

[System.Serializable]
public class ColorButtons
{
    public List<ColorButton> buttons;

}