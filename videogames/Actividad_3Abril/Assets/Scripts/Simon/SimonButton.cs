/*

Highlight the button and amke it paly a sund 

*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SimonButton : MonoBehaviour
{
    [SerializeField] float delay;
    Color originalColor;
    AudioSource audioSource;
    // Start is called before the first frame update
    public void Init(int index)
    {
        originalColor = GetComponent<Image>().color;
        audioSource = GetComponent<AudioSource>();
        audioSource.clip = Resources.Load<AudioClip>($"Audio/{index}");
    }

    public void Highlight(){
        audioSource.Play();
        StartCoroutine(ChangeColor());
    }
    IEnumerator ChangeColor(){
        GetComponent<Image>().color = Color.white;
        //Wait before restoring the original color
        yield return new WaitForSeconds(delay);
        GetComponent<Image>().color = originalColor;
    }

}
