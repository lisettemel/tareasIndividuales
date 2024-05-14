using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class APIConnections : MonoBehaviour
{
    [SerializeField] string url;
    [SerializeField] string getEndPoint;
    // Start is called before the first frame update
    void Start()
    {
        GetData();
    }

    // Update is called once per frame
    public void GetData()
    {
        StartCoroutine(RequestGet(url + getEndPoint));
    }

    IEnumerator RequestGet(string url) {
        //Prepare the reuqest object
        using(UnityWebRequest www = UnityWebRequest.Get(url)) {
            //Make a request and wait for it respond 
            yield return www.SendWebRequest(); //solo hasta que responda

            //Validate the reponse
            if (www.result != UnityWebRequest.Result.Success) {
                Debug.Log("Request failed: " + www.error);
            }
            else {
                string result = www.downloadHandler.text;
                Debug.Log("The response was: " + result);
            }
        }
    }
}