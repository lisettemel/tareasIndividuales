/*
    Detect when the ball goes out of the game 

    Lisette Melo Reyes
*/


using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class PongGoal : MonoBehaviour
{
    [SerializeField] string side;

    //Variabe to refernece another script 
    PongManager manager;

    // Start is called before the first frame update
    void Start()
    {
        manager = GameObject.FindWithTag("GameController").GetComponent<PongManager>();
    }

    //Detect when the ball goes out of bounds
    void OnCollisionEnter2D(Collision2D other){
        manager.Score(side);
        Destroy(other.gameObject);
    }

}
